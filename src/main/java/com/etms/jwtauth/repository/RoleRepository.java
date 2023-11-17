package com.etms.jwtauth.repository;

import java.util.Optional;

import com.etms.jwtauth.models.ERole;
import com.etms.jwtauth.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
