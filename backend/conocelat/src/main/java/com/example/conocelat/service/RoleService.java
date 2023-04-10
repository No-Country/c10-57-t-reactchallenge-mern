package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.Role;

public interface RoleService {
    public List<Role> listAllRoles();

    public Role saveRole(Role user);

    public Role getRoleById(Long id);

    public void deleteRole(Long id);

}
