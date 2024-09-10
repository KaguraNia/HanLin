package com.wusan.service.Impl;

import com.baomidou.mybatisplus.extension.service.IService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wusan.dao.User;
import com.wusan.mapper.UserMapper;
import com.wusan.service.UserService;
import org.springframework.stereotype.Service;

/**
 * @author Xue
 * @create 2024-02-26-22:18
 */
@Service
public class UserServiceImpl  extends ServiceImpl<UserMapper, User> implements UserService{
}
