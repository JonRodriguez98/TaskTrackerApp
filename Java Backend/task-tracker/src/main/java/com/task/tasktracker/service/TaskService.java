package com.task.tasktracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.tasktracker.model.Task;
import com.task.tasktracker.repository.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	TaskRepository taskRepo;
	

	//GET
	public List<Task> getTasks() {
		return taskRepo.findAll();
	}
	//ADD AND DISPLAY ALL
	public List<Task> addTask(Task task) {
		taskRepo.save(task);
		return taskRepo.findAll();
	}
	//DELETE AND DISPLAY ALL
	public List<Task> deleteTask(Long id) {
		taskRepo.deleteById(id);
		return taskRepo.findAll();
	}
	
	//UPDATE
	public List<Task> updateTask(Task task, Long id){
		Task currentTask = taskRepo.findById(id).get();
		currentTask.setText(task.getText());
		currentTask.setDay(task.getDay());
		currentTask.setReminder(task.isReminder());
		return taskRepo.findAll();
	}

}
