package com.etms.jwtauth.controllers;

import com.etms.jwtauth.models.User;
import com.etms.jwtauth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
public class UsersController {

  @GetMapping("/all")
  public String allAccess() {
    return "Public Content";
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('MANAGER') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/manager")
  @PreAuthorize("hasRole('MANAGER')")
  public String managerAccess() {
    return "MANAGER Board.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }

  @GetMapping("/toc")
  @PreAuthorize("hasRole('TOC')")
  public String tocAccess() {
    return "TOC Board.";
  }
}
