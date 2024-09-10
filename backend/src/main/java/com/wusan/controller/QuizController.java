package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.bean.QuizResponse;
import com.wusan.common.R;
import com.wusan.dao.Grade;
import com.wusan.dao.Quiz;
import com.wusan.dao.User;
import com.wusan.service.GradeService;
import com.wusan.service.QuizService;
import com.wusan.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Xue
 * @create 2024-03-12-23:54
 */
@RestController
@RequestMapping("/quiz")
@Api(value = "测验接口",tags = "测验接口")
public class QuizController {
    @Resource
    private QuizService quizService;
    @Resource
    private UserService userService;
    @Resource
    private GradeService gradeService;

    @GetMapping("/quizNum")
    @ApiOperation("根据学生姓名获取学生的测验次数")
    public R<Integer> gte(@RequestParam String username){
        LambdaQueryWrapper<Quiz> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Quiz::getUserName,username);
        List<Quiz> list = quizService.list(queryWrapper);
        return R.success(list.size());
    }
    @GetMapping("/quiz")
    @ApiOperation("根据学生姓名获取学生的测验列表")
    public R<List<Quiz>> gteasd(@RequestParam String username){
        LambdaQueryWrapper<Quiz> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Quiz::getUserName,username);
        List<Quiz> list = quizService.list(queryWrapper);
        return R.success(list);
    }

    @GetMapping("/quizs")
    @ApiOperation("根据教师用户名获取名下学生全部的测验次数")
    public R<Integer> get(@RequestParam String username){
        LambdaQueryWrapper<User> qw = new LambdaQueryWrapper<>();
        qw.eq(User::getName,username);
        User teacher = userService.getOne(qw);
        if (teacher==null){
            return R.error("不存在该教师");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<User>();
        queryWrapper.eq(User::getTeacherId,teacher.getId());
        List<User> userList = userService.list(queryWrapper);

        System.out.println(userList.size());
        Integer num=0;
        for (User u:userList){
            LambdaQueryWrapper<Quiz> queryWrapper1 = new LambdaQueryWrapper<>();
            queryWrapper1.eq(Quiz::getUserName,u.getName());
            List<Quiz> quizList = quizService.list(queryWrapper1);
            num+=quizList.size();
        }
        return R.success(num);
    }
    @GetMapping("/grades")
    @ApiOperation("根据教师用户名获取名下学生全部的测验成绩")
    public R<List<QuizResponse>> geta(@RequestParam String username){
        LambdaQueryWrapper<User> qw = new LambdaQueryWrapper<>();
        qw.eq(User::getName,username);
        User teacher = userService.getOne(qw);

        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<User>();
        queryWrapper.eq(User::getTeacherId,teacher.getId());
        List<User> userList = userService.list(queryWrapper);
        ArrayList<QuizResponse> quizResponseList = new ArrayList<>();
        for (User u:userList){
            LambdaQueryWrapper<Quiz> queryWrapper1 = new LambdaQueryWrapper<>();
            queryWrapper1.eq(Quiz::getUserName,u.getName());
            List<Quiz> quizList = quizService.list(queryWrapper1);
            for (Quiz q:quizList){
                QuizResponse quizResponse = new QuizResponse();
                quizResponse.setId(q.getId());
                quizResponse.setTotalScore(q.getTotalScore());
                quizResponse.setUserName(q.getUserName());

                LambdaQueryWrapper<Grade> queryWrapper2 = new LambdaQueryWrapper<>();
                queryWrapper2.eq(Grade::getQuizId,q.getId());
                List<Grade> gradeList = gradeService.list(queryWrapper2);
                ArrayList<QuizResponse.Grade> qGradeList = new ArrayList<>();
                for (Grade g:gradeList){
                    QuizResponse.Grade qGrade = new QuizResponse.Grade();
                    BeanUtils.copyProperties(g,qGrade);
                    qGradeList.add(qGrade);
                }
                quizResponse.setGradeList(qGradeList);
                quizResponseList.add(quizResponse);
            }
        }
        return R.success(quizResponseList);
    }
}
