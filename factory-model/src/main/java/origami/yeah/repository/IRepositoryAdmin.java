package origami.yeah.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import origami.yeah.model.Admin;

public interface IRepositoryAdmin extends JpaRepository<Admin, Long> {

}
