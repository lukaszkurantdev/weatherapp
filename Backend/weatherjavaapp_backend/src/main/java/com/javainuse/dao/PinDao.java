package main.java.com.javainuse.dao;

import main.java.com.javainuse.model.DAOPin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PinDao extends CrudRepository<DAOPin, Integer> {
    List<DAOPin> findAll();
    DAOPin findById(long id);
}
