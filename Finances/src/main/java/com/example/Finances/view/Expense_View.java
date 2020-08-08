package com.example.Finances.view;

import com.example.Finances.model.Expense;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Expense_View extends JpaRepository<Expense,Long> {
	Expense findByName(String name);
}
