package com.etms.jwtauth.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;


  private String username;

  private String email;

  private String password;

  private String lastname;

  private String gender;


  private Date dob;

  private String collegeloc;

  private String collegename;



  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  public User(String username, String email, String password, String lastname, String gender, Date dob, String collegeloc, String collegename) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.lastname = lastname;
    this.gender = gender;
    this.dob = dob;
    this.collegeloc = collegeloc;
    this.collegename = collegename;
  }



  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public Date getDob() {
    return dob;
  }

  public void setDob(Date dob) {
    this.dob = dob;
  }

  public String getCollegeloc() {
    return collegeloc;
  }

  public void setCollegeloc(String collegeloc) {
    this.collegeloc = collegeloc;
  }

  public String getCollegename() {
    return collegename;
  }

  public void setCollegename(String collegename) {
    this.collegename = collegename;
  }

}
