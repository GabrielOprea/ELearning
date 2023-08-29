package com.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  private int quizid;
  public Question()
  {
    super();
  }

  public Question(int id, int quizid, String vara, String varb, String varc, String vard, int correctvar) {
    this.id = id;
    this.quizid = quizid;
    this.vara = vara;
    this.varb = varb;
    this.varc = varc;
    this.vard = vard;
    this.correctvar = correctvar;
  }

  private String vara;
  private String varb;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getQuizid() {
    return quizid;
  }

  public void setQuizid(int quizid) {
    this.quizid = quizid;
  }

  public String getVara() {
    return vara;
  }

  public void setVara(String vara) {
    this.vara = vara;
  }

  public String getVarb() {
    return varb;
  }

  public void setVarb(String varb) {
    this.varb = varb;
  }

  public String getVarc() {
    return varc;
  }

  public void setVarc(String varc) {
    this.varc = varc;
  }

  public String getVard() {
    return vard;
  }

  public void setVard(String vard) {
    this.vard = vard;
  }

  public int getCorrectvar() {
    return correctvar;
  }

  public void setCorrectvar(int correctvar) {
    this.correctvar = correctvar;
  }

  private String varc;
  private String vard;
  private int correctvar;
}
