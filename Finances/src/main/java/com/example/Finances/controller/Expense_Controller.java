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

import com.example.Finances.model.Expense;
import com.example.Finances.view.Expense_View;


@RestController
@RequestMapping("/api")
public class Expense_Controller {
	
	private Expense_View expense_View;
	
	public Expense_Controller(Expense_View expense_View) {
		super();
		this.expense_View = expense_View;
	}
	
	// retrieve all expenses
	@GetMapping("/Expense")
	Collection<Expense> expense(){
		return expense_View.findAll();
	}
	// retrieve a specific expenses group based on id
	@GetMapping("/Expense/{id}")
	ResponseEntity<Expense> getExpense(@PathVariable Long id){
		Optional<Expense> expense = expense_View.findById(id);
		return expense.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	// create a new expense
	@PostMapping("/Expense/{id}")
	ResponseEntity<Expense> create_Expense(@RequestBody Expense expense) throws URISyntaxException{
		Expense result = expense_View.save(expense);
		return ResponseEntity.created(new URI("/api/Expense" + result.getId())).body(result);
		
	}
	
	@PutMapping("/Expense/{id}")
	ResponseEntity<Expense> updateExpenseGroup(@RequestBody Expense expense){
		Expense result = expense_View.save(expense);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/Expense/{id}")
	ResponseEntity<Expense> deleteExpenseGroup(@PathVariable Long id){
		expense_View.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
}
