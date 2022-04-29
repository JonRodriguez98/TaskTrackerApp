package com.task.tasktracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.task.tasktracker.model.Task;

@CrossOrigin("http://localhost:4200")
public interface TaskRepository extends JpaRepository<Task, Long> {

}
