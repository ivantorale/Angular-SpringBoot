package angular.api.services;

import angular.api.model.User;
import angular.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> listUser(){return userRepository.findAll();}
    public void saveUser(User user){userRepository.save(user);}
    public User findUserById(Integer id){return userRepository.findById(id).get();}
    public void deleteUser(Integer id){userRepository.deleteById(id);}
}
