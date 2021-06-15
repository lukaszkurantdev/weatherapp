package main.java.com.javainuse.controller;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import main.java.com.javainuse.dao.RoleDao;
import main.java.com.javainuse.dao.UserDao;
import main.java.com.javainuse.model.*;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import main.java.com.javainuse.service.JwtUserDetailsService;


import main.java.com.javainuse.config.JwtTokenUtil;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	@Autowired
	private UserDao userDao;

	@Autowired
	private RoleDao roleDao;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		DAOUser user = userDao.findByUsername(authenticationRequest.getUsername());

		return ResponseEntity.ok(new JwtResponse(token, user.getPrivilegesNames(), user.getLatitude(), user.getLongitude()));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		DAOUser newUser = userDetailsService.save(user);
		return ResponseEntity.ok(newUser);
	}

	@RequestMapping(value = "/change-password", method = RequestMethod.POST)
	public ResponseEntity<?> changePassword(@RequestBody PasswordDTO req, Principal principal) throws Exception {
		return ResponseEntity.ok(userDetailsService.changePassword(principal.getName(), req));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}

	@PreAuthorize("hasAuthority('MODERATE_REDACTORS_PRIVILEGE')")
	@RequestMapping({ "/all_users_list" })
	public ResponseEntity<?> getAllUsers() throws Exception {
		List<DAOUser> users = userDao.findAll();
		return ResponseEntity.ok(users);
	}

	@PreAuthorize("hasAuthority('MODERATE_REDACTORS_PRIVILEGE')")
	@RequestMapping({ "/all_redactors_list" })
	public ResponseEntity<?> getAllRedactors() throws Exception {
		DAORole redactorRole = roleDao.findByName("ROLE_REDACTOR");
		List<DAOUser> users = userDao.findAllByRoles_Id(redactorRole.getId());
		return ResponseEntity.ok(users);
	}

	@PreAuthorize("hasAuthority('MODERATE_REDACTORS_PRIVILEGE')")
	@RequestMapping(value = "/redactor_role", method = RequestMethod.POST)
	public ResponseEntity<?> addRedactorRole(@RequestBody RedactorRoleDTO req, Principal principal) throws Exception {
		DAORole redactorRole = roleDao.findByName("ROLE_REDACTOR");
		DAOUser user = userDao.findById(req.getUserId());

		if(user == null) {
			throw new Exception("User not found");
		}

		Collection<DAORole> userRoles =user.getRoles();
		if(!userRoles.contains(redactorRole)) {
			userRoles.add(redactorRole);
			user.setRoles(userRoles);
		} else {
			throw new Exception("User has redactor role already");
		}

		userDao.save(user);

		return ResponseEntity.ok(user);
	}

	@PreAuthorize("hasAuthority('MODERATE_REDACTORS_PRIVILEGE')")
	@RequestMapping(value = "/redactor_role", method = RequestMethod.DELETE)
	public ResponseEntity<?> removeRedactorRole(@RequestBody RedactorRoleDTO req, Principal principal) throws Exception {
		DAORole redactorRole = roleDao.findByName("ROLE_REDACTOR");
		DAOUser user = userDao.findById(req.getUserId());

		if(user == null) {
			throw new Exception("User not found");
		}

		Collection<DAORole> userRoles = user.getRoles();
		if(userRoles.contains(redactorRole)) {
			userRoles.remove(redactorRole);
			user.setRoles(userRoles);
		} else {
			throw new Exception("Missing redactor role");
		}
		userDao.save(user);
		return ResponseEntity.ok(user);
	}
}