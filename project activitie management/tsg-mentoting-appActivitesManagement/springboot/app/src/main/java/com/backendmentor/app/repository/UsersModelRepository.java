package com.backendmentor.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Users;

@Repository
public interface UsersModelRepository extends JpaRepository<Users, Integer>{}
