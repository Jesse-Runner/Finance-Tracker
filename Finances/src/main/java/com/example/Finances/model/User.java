package com.example.Finances.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	private Long id;
	private String name;
	private String email;
	private Long age;
	private String state;
	@OneToMany
	@JoinColumn(name = "id")
	private List<Expense_group> expense_group = new ArrayList<Expense_group>();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public List<Expense_group> getExpense_group() {
		return expense_group;
	}
	public void setExpense_group(List<Expense_group> expense_group) {
		this.expense_group = expense_group;
	}
	
}
