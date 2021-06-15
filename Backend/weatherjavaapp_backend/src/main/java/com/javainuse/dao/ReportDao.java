package main.java.com.javainuse.dao;

import main.java.com.javainuse.model.DAOReport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportDao extends CrudRepository<DAOReport, Integer> {
    List<DAOReport> findAll();
    DAOReport findById(long id);
}
