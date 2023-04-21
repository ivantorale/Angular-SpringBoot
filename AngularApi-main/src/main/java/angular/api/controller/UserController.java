package angular.api.controller;

import angular.api.model.User;
import angular.api.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/users")
    public List<User> listUser() {
        return userService.listUser();
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        try {
            User user = userService.findUserById(id);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/users")
    public ResponseEntity<User> newUser(@RequestBody User user) {
        try {
            System.out.println(user);
            userService.saveUser(user);
            return null;
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<?> editUser(@RequestBody User user, @PathVariable Integer id) {
        try {
            User userExists = userService.findUserById(id);
            userExists.setId(user.getId());
            userExists.setAge(user.getAge());
            userExists.setEmail(user.getEmail());
            userExists.setName(user.getName());
            userExists.setQuota(user.getQuota());
            userExists.setLast_name(user.getLast_name());
            userService.saveUser(userExists);
            return new ResponseEntity<User>(userExists, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
