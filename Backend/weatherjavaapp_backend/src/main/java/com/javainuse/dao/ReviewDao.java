package main.java.com.javainuse.dao;

import main.java.com.javainuse.model.DAOPin;
import main.java.com.javainuse.model.DAOReview;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import main.java.com.javainuse.model.DAOUser;

@Repository
public interface ReviewDao extends CrudRepository<DAOReview, Integer> {
    DAOReview findByUserAndPin(DAOUser user, DAOPin pin);

}