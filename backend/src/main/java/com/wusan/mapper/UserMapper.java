package com.wusan.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wusan.dao.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author Xue
 * @create 2024-02-26-22:14
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
