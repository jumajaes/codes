package com.backendmentor.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Userstoassign;

@Repository
public interface FirtsmodelRepository extends JpaRepository<Userstoassign, Integer>{}
