package com.example.Finances.view;

import com.example.Finances.model.Expense_group;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Expense_group_View extends JpaRepository<Expense_group,Long> {
	Expense_group findByName(String name);
}
