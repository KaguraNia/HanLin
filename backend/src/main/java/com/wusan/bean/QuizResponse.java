package com.wusan.bean;

import lombok.Data;

import java.util.List;

/**
 * @author Xue
 * @create 2024-03-13-22:46
 */
@Data
public class QuizResponse {
    private Integer id;
    private String userName;
    private Integer totalScore;
    private List<Grade> gradeList;
    @Data
    public static class Grade {
        private Integer id;
        private Integer quizId;
        private String subject;
        private String imgAddr;
        private Integer score;
        private Integer fullScore;
    }
}
