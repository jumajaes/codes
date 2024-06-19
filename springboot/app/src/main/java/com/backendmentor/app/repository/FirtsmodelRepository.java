package com.backendmentor.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendmentor.app.models.Firtsmodel;

@Repository
public interface FirtsmodelRepository extends JpaRepository<Firtsmodel, Long>{}
