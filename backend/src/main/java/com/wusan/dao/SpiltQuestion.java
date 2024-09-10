package com.wusan.dao;

import lombok.Data;

/**
 * @author Xue
 * @create 2024-03-19-23:16
 */
@Data
public class SpiltQuestion {
    private Integer id;
    private Integer gradeId;
    private String originalQuestion;
    private String questionAnswer;
    private String aiJudgeResult;
}
