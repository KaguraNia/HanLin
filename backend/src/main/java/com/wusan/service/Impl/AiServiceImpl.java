package com.wusan.service.Impl;

import com.wusan.fegin.AiServerClient;
import com.wusan.service.AiService;
import org.springframework.beans.factory.annotation.Autowired;


public class AiServiceImpl implements AiService {
    @Autowired
    private AiServerClient aiServerClient;
    @Override
    public String getJudgeResult(String quiz) {
        return aiServerClient.getAiJudge(quiz);
    }
}
