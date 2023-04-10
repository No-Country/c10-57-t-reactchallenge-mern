package com.example.conocelat.service;

import java.util.List;

import com.example.conocelat.model.Characteristic;


public interface CharacteristicService {



    public List<Characteristic> listAllCharacteristic();

    public Characteristic saveCharacteristic(Characteristic characteristic);

    public Characteristic getCharacteristicById(Long id);

    public Characteristic updateCharacteristic(Characteristic characteristic);

    public void deleteCharacteristic(Long id);
}
