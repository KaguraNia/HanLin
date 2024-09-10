package com.wusan.dao;

import lombok.Data;

/**
 * @author Xue
 * @create 2024-02-26-22:13
 */
@Data
public class User {
    private Long id;
    private String name;
    private String password;
    private Integer type;
    private Integer teacherId;
}
