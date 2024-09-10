package com.wusan.dao;

import lombok.Data;

/**
 * @author Xue
 * @create 2024-03-13-21:46
 */
@Data
public class KnowledgePoint {
    private Integer id;
    private Integer quizId;
    private String content;
    private String masteryDegree;
}
