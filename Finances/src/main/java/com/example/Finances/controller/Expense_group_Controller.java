package com.example.Finances.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Finances.model.Expense_group;
import com.example.Finances.view.Expense_group_View;

@RestController
@RequestMapping("/api")
public class Expense_group_Controller {
	
	private Expense_group_View expense_View;
	
	public Expense_group_Controller(Expense_group_View expense_View) {
		super();
		this.expense_View = expense_View;
	}
	
	// retrieve all expense groups
	@GetMapping("/Expense_group")
	Collection<Expense_group> expenseGroups(){
		return expense_View.findAll();
	}
	// retrieve a specific expense group based on id
	@GetMapping("/Expense_group/{id}")
	ResponseEntity<Expense_group> getExpense(@PathVariable String id){
		Optional<Expense_group> expenseGroup = Optional.ofNullable(expense_View.findByName(id));
		return expenseGroup.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	// create a new expense group
	@PostMapping("/Expense_group")
	ResponseEntity<Expense_group> create_Expense_group(@RequestBody Expense_group expense_group) throws URISyntaxException{
		Expense_group result = expense_View.save(expense_group);
		return ResponseEntity.created(new URI("/api/Expense_group" + result.getName())).body(result);
		
	}
	
	@PutMapping("/Expense_group/{id}")
	ResponseEntity<Expense_group> updateExpenseGroup(@RequestBody Expense_group expense_group){
		Expense_group result = expense_View.save(expense_group);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/Expense_group/{id}")
	ResponseEntity<Expense_group> deleteExpenseGroup(@PathVariable Long id){
		expense_View.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
}
