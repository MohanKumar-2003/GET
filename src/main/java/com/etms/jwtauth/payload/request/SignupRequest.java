package com.etms.jwtauth.payload.request;

import java.util.Date;
import java.util.Set;

import jakarta.validation.constraints.*;

public class SignupRequest {

  private String username;



  private String email;

  private Set<String> role;


  private String password;
  private String lastname;
  private String gender;


  private Date dob;

  private String collegeloc;

  private String collegename;

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }//commit

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

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }
}
