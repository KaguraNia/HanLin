package com.wusan.fegin;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(url = "8.9.12.35:9090")
public interface AiServerClient {
    @RequestMapping(value = "/aiJudge",method = RequestMethod.GET)
    String getAiJudge(String quiz);
}
