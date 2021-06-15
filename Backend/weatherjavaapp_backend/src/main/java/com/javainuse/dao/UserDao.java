package main.java.com.javainuse.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import main.java.com.javainuse.model.DAOUser;

import java.util.List;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	DAOUser findByUsername(String username);
	DAOUser findById(Long id);
	List<DAOUser> findAll();
	List<DAOUser> findAllByRoles_Id(Long id);
}