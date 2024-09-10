package com.wusan.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wusan.dao.Quiz;
import com.wusan.mapper.QuizMapper;
import com.wusan.service.QuizService;
import org.springframework.stereotype.Service;

/**
 * @author Xue
 * @create 2024-03-12-23:53
 */
@Service
public class QuizServiceImpl extends ServiceImpl<QuizMapper, Quiz> implements QuizService {
}
