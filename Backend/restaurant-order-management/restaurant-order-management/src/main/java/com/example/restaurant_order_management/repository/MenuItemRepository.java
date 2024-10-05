package com.example.restaurant_order_management.repository;

import com.example.restaurant_order_management.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
