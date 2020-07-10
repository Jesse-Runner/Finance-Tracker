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
	private String description;
	private Instant date;
	@ManyToOne
	private Expense_group group;

	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Instant getDate() {
		return date;
	}
	public void setDate(Instant date) {
		this.date = date;
	}
	public Expense_group getGroup() {
		return group;
	}
	public void setGroup(Expense_group group) {
		this.group = group;
	}
	
	
	
}
