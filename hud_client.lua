
ESX = exports["es_extended"]:getSharedObject()
myStrengthModifier = 1

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(100)
	end
end)


-- - Player status
Citizen.CreateThread(function()
	while true do
		TriggerEvent('esx_status:getStatus', 'hunger', function(status)
			food = math.floor(status.getPercent())
		end)

		TriggerEvent('esx_status:getStatus', 'thirst', function(status)
			thirst = math.floor(status.getPercent())
		end)		
		
		-- print("Mise a jours de la nouriture")
		Citizen.Wait(20000)
	end
end)


RegisterNetEvent("Emyhud:onTick")
AddEventHandler("Emyhud:onTick", function(status)

	TriggerEvent('esx_status:getStatus', 'hunger', function(status)
		food = math.floor(100-status.getPercent())
	end)
	
	TriggerEvent('esx_status:getStatus', 'thirst', function(status)
		thirst = math.floor(100-status.getPercent())
	end)	
end)


RegisterNetEvent('Emyhud:Update')
AddEventHandler('Emyhud:Update', function(nom, valeur)
	local playerStatus 
	local showPlayerStatus = 0 	
	playerStatus = { action = 'setStatus', status = {} }
	if nom == "hunger" then
		food = math.floor(valeur)
			
	elseif nom == "thirst" then
		thirst = math.floor(valeur)
	end
	


	SendNUIMessage({
		pauseMenu = IsPauseMenuActive();
		armour = GetPedArmour(PlayerPedId());
		health = GetEntityHealth(PlayerPedId())/2;
		food = food;
		thirst = thirst;		
		id = GetPlayerServerId(PlayerId());

	})
	
end)



RegisterNetEvent('Emyhud:Update')
AddEventHandler('Emyhud:Update', function(nom, valeur)
	local playerStatus 
	local showPlayerStatus = 0 	
	playerStatus = { action = 'setStatus', status = {} }
	if nom == "hunger" then
		food = math.floor(valeur)
			
	elseif nom == "thirst" then
		thirst = math.floor(valeur)
	end
	
end)

local statushud = false

RegisterCommand('+OpenCineMenu', function()
	if statushud == false then
		DisplayHud(false)
		DisplayRadar(false)
		statushud = true
		
		SendNUIMessage({
			ponerbarras = true
		})
	else	
		DisplayHud(true)
		DisplayRadar(true)
		SendNUIMessage({
			quitarbarras = true
		})
		statushud = false
	end		
end, false)

RegisterKeyMapping('+OpenCineMenu', 'Mode cinématique', 'keyboard', 'F10')

local forceradar = false

RegisterNetEvent("Emyhud:SetRadar")
AddEventHandler("Emyhud:SetRadar", function(status)
	forceradar = status
	radarstatus = status
end)

		

Citizen.CreateThread(function()
    while true do 
        local s = 1500
        local ped = GetPlayerPed(-1)
        local MyPedVeh = GetVehiclePedIsIn(GetPlayerPed(-1),false)
        local EstaEnElAgua = IsEntityInWater(ped)
        local EstaEnElAguaNadando = IsPedSwimming(ped)
        
        -- Rdarar
        if IsPedSittingInAnyVehicle(ped) and not IsPlayerDead(ped) or forceradar == true then
			if statushud == false then
				DisplayRadar(true)
				radarstatus = true
			else
				DisplayRadar(false)
				radarstatus = false
			end	
        elseif not IsPedSittingInAnyVehicle(ped) or forceradar == false then
			
            DisplayRadar(false)
			radarstatus = false
        end
        SendNUIMessage({
            pauseMenu = IsPauseMenuActive();
            armour = GetPedArmour(PlayerPedId());
            health = GetEntityHealth(PlayerPedId())/2;
            food = food;
            thirst = thirst;
            stress = stress;
            estoyencoche = radarstatus;
            id = GetPlayerServerId(PlayerId());
            EstaEnElAgua = IsEntityInWater(ped);
            EstaEnElAguaNadando = IsPedSwimming(ped);
            oxigenoagua = GetPlayerUnderwaterTimeRemaining(PlayerId())*10;
            oxigeno = 100-GetPlayerSprintStaminaRemaining(PlayerId());
        })

        RegisterCommand('hud',function()
            SendNUIMessage({
                quitarhud = true
            })
        end)

        RegisterCommand('mettrehud',function()
            SendNUIMessage({
                ponerhud = true
            })
        end)

        RegisterCommand('mettrebar',function()
            DisplayHud(false)
            SendNUIMessage({
                ponerbarras = true
            })
        end)

        RegisterCommand('supprimerbar',function()
            SendNUIMessage({
                quitarbarras = true
            })
        end)

        Citizen.Wait(s)
        
	end
	
end)







