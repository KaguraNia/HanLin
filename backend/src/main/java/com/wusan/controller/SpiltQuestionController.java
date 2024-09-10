package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.common.R;
import com.wusan.dao.SpiltQuestion;
import com.wusan.service.SpiltQuestionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Xue
 * @create 2024-03-19-23:23
 */
@RestController
@RequestMapping("/question")
@Api(value = "题目接口",tags = "题目接口")
public class SpiltQuestionController {
    @Resource
    private SpiltQuestionService spiltQuestionService;

    @GetMapping("/ocrResult")
    @ApiOperation("根据科目id获取ocr图片分割结果(原题、解答、评判结果)")
    public R<List<SpiltQuestion>> getadsa(@RequestParam Integer gradeId){
        LambdaQueryWrapper<SpiltQuestion> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SpiltQuestion::getGradeId,gradeId);
        List<SpiltQuestion> list = spiltQuestionService.list(queryWrapper);
        return R.success(list);
    }

    @PutMapping("/update")
    @ApiOperation("根据题目id修改题目对应评语(AiJudgeResult字段指的是评语)")
    public R<String> getadsaasd(@RequestParam Integer questionId,@RequestParam String comment){
        SpiltQuestion spiltQuestion = new SpiltQuestion();
        spiltQuestion.setAiJudgeResult(comment);
        spiltQuestion.setId(questionId);
        spiltQuestionService.updateById(spiltQuestion);
        return R.success("修改成功");
    }
}
