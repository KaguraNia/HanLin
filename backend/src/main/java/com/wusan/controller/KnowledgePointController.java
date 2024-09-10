package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.common.R;
import com.wusan.dao.Grade;
import com.wusan.dao.KnowledgePoint;
import com.wusan.service.KnowledgePointService;
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
 * @create 2024-03-13-21:50
 */
@RestController
@RequestMapping("/knowledgePoint")
@Api(value = "知识点接口",tags = "知识点接口")
public class KnowledgePointController {
    @Resource
    private KnowledgePointService knowledgePointService;

    @GetMapping("/getOne")
    @ApiOperation("根据测验id获取相关知识点列表和掌握情况")
    public R<List<KnowledgePoint>> get(@RequestParam Integer quizId){
        LambdaQueryWrapper<KnowledgePoint> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(KnowledgePoint::getQuizId,quizId);
        List<KnowledgePoint> list = knowledgePointService.list(queryWrapper);
        return R.success(list);
    }

}
