package com.wusan.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.wusan.common.R;
import com.wusan.dao.User;
import com.wusan.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Xue
 * @create 2024-02-26-22:22
 */
@RestController
@RequestMapping("/user")
@Api(value = "用户接口",tags = "用户接口")
public class UserController {

    @Resource
    private UserService userService;

    @PostMapping("/login")
    @ApiOperation("登录(type=1为学生、2为教师)")
    public R<String> login(@RequestBody User user){
        String name=user.getName();
        String password=user.getPassword();
        if (name==null||name.isEmpty()){
            return R.error("姓名为空");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getName,name);
        User user1 = userService.getOne(queryWrapper);
        if (user1==null){
            return R.error("账号不存在");
        }
        if (!user.getType().equals(user1.getType())){
            return R.error("账号不存在");
        }
        if (password.equals(user1.getPassword())){
            return R.success("登陆成功");
        }
        return R.error("密码错误");
    }

    @DeleteMapping("/delete")
    @ApiOperation("删除用户")
    public R<String> delete(@RequestParam String username){
        if (username==null||username.isEmpty()){
            return R.error("传入参数不能为空");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getName,username);
        User one = userService.getOne(queryWrapper);
        if (one==null){
            return R.error("用户不存在");
        }
        userService.remove(queryWrapper);
        return R.success("删除成功");
    }

    @PostMapping("/create")
    @ApiOperation("创建用户")
    public R<String> create(@RequestBody User user){
        String name=user.getName();
        String password=user.getPassword();
        if (name==null||name.isEmpty()){
            return R.error("姓名为空");
        }
        if (password==null||password.isEmpty()){
            return R.error("密码为空");
        }
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getName,name);
        User user1 = userService.getOne(queryWrapper);
        if (user1!=null){
            return R.error("账号已存在");
        }
        user.setId(null);
        userService.save(user);
        return R.success("创建成功");
    }

    @GetMapping("/get")
    @ApiOperation("获取所有教师和学生用户")
    public R<List<User>> get(){
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getType,1).or().eq(User::getType,2);
        List<User> userList = userService.list(queryWrapper);
        return R.success(userList);
    }
}
