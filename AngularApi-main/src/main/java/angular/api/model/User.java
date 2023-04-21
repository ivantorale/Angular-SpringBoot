package angular.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="users")
public class User {

    @Id @GeneratedValue
    private Integer id;
    private Integer age;
    private String email;
    private String name;
    private Integer quota;
    private String last_name;
}
