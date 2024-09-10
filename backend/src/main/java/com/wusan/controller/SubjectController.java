package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.common.R;
import com.wusan.dao.Grade;
import com.wusan.service.GradeService;
import com.wusan.service.QuizService;
import com.wusan.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Xue
 * @create 2024-03-19-22:40
 */
@RestController
@RequestMapping("/subject")
@Api(value = "科目接口",tags = "科目接口")
public class SubjectController {
    @Resource
    private QuizService quizService;
    @Resource
    private UserService userService;
    @Resource
    private GradeService gradeService;
    @GetMapping("/grade")
    @ApiOperation("根据测验Id获取测试中的各科成绩列表")
    public R<List<Grade>> get(@RequestParam Integer quizId){
        LambdaQueryWrapper<Grade> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Grade::getQuizId,quizId);
        List<Grade> list = gradeService.list(queryWrapper);
        return R.success(list);
    }
}
