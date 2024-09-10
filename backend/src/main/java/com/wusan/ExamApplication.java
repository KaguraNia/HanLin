package com.wusan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author Xue
 * @create 2024-02-26-22:03
 */

@SpringBootApplication
@EnableOpenApi
public class ExamApplication {
    public static void main(String[] args){
        SpringApplication.run(ExamApplication.class);
    }
}
