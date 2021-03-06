package com.example.Finances.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Expense")
public class Expense {
	
	@Id
	private Long id;
	private Long total;
	private String name;
	private String description;
	private String date;
	@ManyToOne
	private Expense_group group;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getTotal() {
		return total;
	}
	public void setTotal(Long total) {
		this.total = total;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Expense_group getGroup() {
		return group;
	}
	public void setGroup(Expense_group group) {
		this.group = group;
	}
}