package com.wusan.dao;

import lombok.Data;

/**
 * @author Xue
 * @create 2024-03-12-23:46
 */
@Data
public class Quiz {
    private Integer id;
    private String userName;
    private Integer totalScore;
    private String quizName;
}
