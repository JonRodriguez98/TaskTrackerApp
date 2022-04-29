package com.task.tasktracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.tasktracker.model.Task;
import com.task.tasktracker.service.TaskService;

@RestController
@RequestMapping
public class TaskController {
	
	@Autowired
	TaskService taskService;
	
	//GET
	@CrossOrigin("http://localhost:4200")
	@GetMapping("/tasks")
	public List<Task> getTasks() {
		return taskService.getTasks();
	}
	
	//ADD
	@CrossOrigin("http://localhost:4200")
	@PostMapping("/tasks")
	public List<Task> addTasks(@RequestBody Task task) {
		return taskService.addTask(task);
	}
	//DELETE
	@CrossOrigin("http://localhost:4200")
	@DeleteMapping("/tasks/{tId}")
	public List<Task> deleteTask(@PathVariable(name="tId") Long id){
		return taskService.deleteTask(id);
	}
	//UPDATE
	@CrossOrigin("http://localhost:4200")
	@PutMapping("/tasks/{tId}")
	public List<Task> updateTask(@PathVariable(name="tId") Long id, @RequestBody Task task){
		return taskService.updateTask(task, id);
	}
}
