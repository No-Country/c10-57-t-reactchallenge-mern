package com.example.conocelat.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.conocelat.model.Characteristic;
import com.example.conocelat.repository.CharacteristicRepository;
import com.example.conocelat.service.CharacteristicService;

import java.util.List;

@Service
public class CharacteristicServiceImpl implements CharacteristicService {

    @Autowired
    public CharacteristicRepository characteristicRepository;

    @Override
    public List<Characteristic> listAllCharacteristic() {
        return characteristicRepository.findAll();
    }

    @Override
    public Characteristic saveCharacteristic(Characteristic characteristic) {
        return characteristicRepository.save(characteristic);
    }

    @Override
    public Characteristic getCharacteristicById(Long id) {
        return characteristicRepository.findById(id).get();
    }

    @Override
    public Characteristic updateCharacteristic(Characteristic characteristic) {
        return characteristicRepository.save(characteristic);
    }

    @Override
    public void deleteCharacteristic(Long id) {
        characteristicRepository.deleteById(id);
    }


}
