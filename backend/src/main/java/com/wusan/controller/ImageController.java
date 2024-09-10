package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.common.R;
import com.wusan.dao.Grade;
import com.wusan.service.GradeService;
import com.wusan.service.QuizService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

/**
 * @author Xue
 * @create 2024-03-18-22:36
 */
@RestController
@RequestMapping("/image")
@Api(value = "试卷图片接口",tags = "试卷图片接口")
public class ImageController {

    @Autowired
    private QuizService quizService;
    @Autowired
    private GradeService gradeService;

    @GetMapping("/img/download")
    @ApiOperation("根据图片URL获取图片")
    public void getad(@RequestParam String name, HttpServletResponse response) throws IOException {
        //输入流--换为流的方式来读取文件的内容,从磁盘输入到内存中；从文件系统中的文件获取输入字节。
        FileInputStream fileInputStream=new FileInputStream("/usr/local/webApp/img/"+name);
        //输出流--文件从内存输出到磁盘中，将文件写回浏览器，并实现展示
        ServletOutputStream outputStream = response.getOutputStream();//获取输出流的方式
        byte[] bytes=new byte[1024];
        int len=0;
        response.setContentType("image/jpeg");///设置一下输出的数据类型，我这里设置的是jpeg
        while ((len=fileInputStream.read(bytes))!=-1){
            outputStream.write(bytes,0,len);
            outputStream.flush();
        }
        outputStream.close();
        fileInputStream.close();
    }

    @PostMapping("/img/upload")
    @ApiOperation("上传图片并绑定到对应测验中的对应科目")
    //只需要返回上传文件的名称
    public R<String> upLoad(MultipartFile file, Integer quizid,@RequestParam String subject){
        LambdaQueryWrapper<Grade> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Grade::getQuizId,quizid);
        queryWrapper.eq(Grade::getSubject,subject);
        Grade grade = gradeService.getOne(queryWrapper);
        if (grade==null){
            return R.error("不存在当前测验或测验中不包含当前科目");
        }
        String originalFilename = file.getOriginalFilename(); //文件名
        System.out.println(originalFilename);
        //UUid防止文件名的覆盖
        String s = UUID.randomUUID().toString();
        String[] split = originalFilename.split("\\.");
        System.out.println(split.length);
        originalFilename=s+"."+split[1];

        String basePath="/usr/local/webApp/img/";  //自定义存放路径
        try {
            //文件的创建
            File file1=new File(basePath);
            if(!file1.exists()){ //如果不存在该路径下的文件
                file1.mkdirs();
            }
            //文件的转存
            file.transferTo(new File(basePath+originalFilename));
        }catch (Exception e){
            e.getMessage();
        }
        grade.setImgAddr(originalFilename);
        gradeService.updateById(grade);
        return R.success("上传成功");
    }
}
