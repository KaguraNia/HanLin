package com.wusan.dao;

import lombok.Data;

/**
 * @author Xue
 * @create 2024-03-12-23:49
 */
@Data
public class Grade {
    private Integer id;
    private Integer quizId;
    private String subject;
    private Integer score;
    private Integer fullScore;
    private String imgAddr;
}
