import React from 'react';

import { IconAsset, IconRoot, IconSize } from './IconRoot';
import { Apps } from './Icon.assets/Apps';
import { ArrowDown } from './Icon.assets/ArrowDown';
import { ArrowLeft } from './Icon.assets/ArrowLeft';
import { ArrowRight } from './Icon.assets/ArrowRight';
import { ArrowUp } from './Icon.assets/ArrowUp';
import { Avatar } from './Icon.assets/Avatar';
import { Calendar } from './Icon.assets/Calendar';
import { ChevronDown } from './Icon.assets/ChevronDown';
import { ChevronLeft } from './Icon.assets/ChevronLeft';
import { ChevronRight } from './Icon.assets/ChevronRight';
import { ChevronUp } from './Icon.assets/ChevronUp';
import { Clock } from './Icon.assets/Clock';
import { ClockFilled } from './Icon.assets/ClockFilled';
import { Close } from './Icon.assets/Close';
import { Cross } from './Icon.assets/Cross';
import { CrossCircle } from './Icon.assets/CrossCircle';
import { CrossSmall } from './Icon.assets/CrossSmall';
import { DisclosureDown } from './Icon.assets/DisclosureDown';
import { DisclosureLeft } from './Icon.assets/DisclosureLeft';
import { DisclosureRight } from './Icon.assets/DisclosureRight';
import { DisclosureUp } from './Icon.assets/DisclosureUp';
import { Done } from './Icon.assets/Done';
import { Download } from './Icon.assets/Download';
import { Edit } from './Icon.assets/Edit';
import { Event } from './Icon.assets/Event';
import { House } from './Icon.assets/House';
import { HouseSbol } from './Icon.assets/HouseSbol';
import { Login } from './Icon.assets/Login';
import { Logout } from './Icon.assets/Logout';
import { Maximize } from './Icon.assets/Maximize';
import { Minus } from './Icon.assets/Minus';
import { MoreHorizontal } from './Icon.assets/MoreHorizontal';
import { MoreVertical } from './Icon.assets/MoreVertical';
import { Persone } from './Icon.assets/Persone';
import { Plus } from './Icon.assets/Plus';
import { PlusCircle } from './Icon.assets/PlusCircle';
import { Search } from './Icon.assets/Search';
import { Settings } from './Icon.assets/Settings';
import { Spinner } from './Icon.assets/Spinner';
import { Trash } from './Icon.assets/Trash';
import { TrashFilled } from './Icon.assets/TrashFilled';
// Action
import { Alarm } from './Icon.assets/Alarm';
import { BankCard } from './Icon.assets/BankCard';
import { BankCardAlt1 } from './Icon.assets/BankCardAlt1';
import { Heart } from './Icon.assets/Heart';
import { HeartStroke } from './Icon.assets/HeartStroke';
import { Language } from './Icon.assets/Language';
import { Lock } from './Icon.assets/Lock';
import { Power } from './Icon.assets/Power';
import { Refresh } from './Icon.assets/Refresh';
import { Reset } from './Icon.assets/Reset';
import { SyncProblem } from './Icon.assets/SyncProblem';
import { Timer } from './Icon.assets/Timer';
import { TimerFill } from './Icon.assets/TimerFill';
// Alert
import { Bell } from './Icon.assets/Bell';
import { BellActive } from './Icon.assets/BellActive';
import { Help } from './Icon.assets/Help';
import { Info } from './Icon.assets/Info';
import { Info1 } from './Icon.assets/Info1';
import { InfoFilled } from './Icon.assets/InfoFilled';
import { Warning } from './Icon.assets/Warning';
// AV
import { CamReverse } from './Icon.assets/CamReverse';
import { CameraVideo } from './Icon.assets/CameraVideo';
import { VideoOff } from './Icon.assets/VideoOff';
import { Mic } from './Icon.assets/Mic';
import { MicNone } from './Icon.assets/MicNone';
import { MicOff } from './Icon.assets/MicOff';
import { MusicMic } from './Icon.assets/MusicMic';
import { VolumeAlt1 } from './Icon.assets/VolumeAlt1';
import { VolumeAlt2 } from './Icon.assets/VolumeAlt2';
import { VolumeDown } from './Icon.assets/VolumeDown';
import { Mute } from './Icon.assets/Mute';
import { VolumeOff } from './Icon.assets/VolumeOff';
import { VolumeUp } from './Icon.assets/VolumeUp';
import { VideoClip } from './Icon.assets/VideoClip';
import { MusicAlbum } from './Icon.assets/MusicAlbum';
// Connection
import { Bluetooth } from './Icon.assets/Bluetooth';
import { BluetoothDisabled } from './Icon.assets/BluetoothDisabled';
import { BluetoothSearching } from './Icon.assets/BluetoothSearching';
import { EthernetWhite } from './Icon.assets/EthernetWhite';
import { Inputs } from './Icon.assets/Inputs';
import { Network } from './Icon.assets/Network';
import { PowerWire } from './Icon.assets/PowerWire';
import { Wifi } from './Icon.assets/Wifi';
import { WifiNotConnected } from './Icon.assets/WifiNotConnected';
import { WifiSignal0 } from './Icon.assets/WifiSignal0';
import { WifiSignal1 } from './Icon.assets/WifiSignal1';
import { WifiSignal2 } from './Icon.assets/WifiSignal2';
import { WifiSignal3 } from './Icon.assets/WifiSignal3';
import { WifiSignalLock } from './Icon.assets/WifiSignalLock';
// Hardware
import { DeviceAlt1 } from './Icon.assets/DeviceAlt1';
import { Device } from './Icon.assets/Device';
import { DeviceTv } from './Icon.assets/DeviceTv';
import { Display } from './Icon.assets/Display';
import { GamepadAlt1 } from './Icon.assets/GamepadAlt1';
import { Gyro } from './Icon.assets/Gyro';
import { Headphones } from './Icon.assets/Headphones';
import { Keyboard } from './Icon.assets/Keyboard';
import { MobileAutorotate } from './Icon.assets/MobileAutorotate';
import { RemotesAndAccessories } from './Icon.assets/RemotesAndAccessories';
import { RemotesAndAccessoriesStroke } from './Icon.assets/RemotesAndAccessoriesStroke';
import { Tv } from './Icon.assets/Tv';
import { TvLive } from './Icon.assets/TvLive';
import { TvLiveAlt1 } from './Icon.assets/TvLiveAlt1';
// Communication
import { AddToCall } from './Icon.assets/AddToCall';
import { Call } from './Icon.assets/Call';
import { CallCircle } from './Icon.assets/CallCircle';
import { CallEnd } from './Icon.assets/CallEnd';
import { CallEndCircle } from './Icon.assets/CallEndCircle';
import { Message } from './Icon.assets/Message';
// Files
import { Cardstack } from './Icon.assets/Cardstack';
import { Copy } from './Icon.assets/Copy';
import { Folder } from './Icon.assets/Folder';
// Map
import { Location } from './Icon.assets/Location';
import { NavigationArrow } from './Icon.assets/NavigationArrow';
// Player
import { Next } from './Icon.assets/Next';
import { Pause } from './Icon.assets/Pause';
import { Play } from './Icon.assets/Play';
import { Previous } from './Icon.assets/Previous';
import { Repeat } from './Icon.assets/Repeat';
import { Shuffle } from './Icon.assets/Shuffle';
// Other
import { Accessibility } from './Icon.assets/Accessibility';
import { Picture } from './Icon.assets/Picture';
import { Sleep } from './Icon.assets/Sleep';
import { MagicWand } from './Icon.assets/MagicWand';
import { Pip1 } from './Icon.assets/Pip1';
import { StoreGamepad } from './Icon.assets/StoreGamepad';
import { StoreRemote } from './Icon.assets/StoreRemote';
import { Ticket } from './Icon.assets/Ticket';

export const iconSectionsSet = {
    navigation: {
        apps: Apps,
        arrowDown: ArrowDown,
        arrowLeft: ArrowLeft,
        arrowRight: ArrowRight,
        arrowUp: ArrowUp,
        disclosureDown: DisclosureDown,
        disclosureLeft: DisclosureLeft,
        disclosureRight: DisclosureRight,
        disclosureUp: DisclosureUp,
        chevronDown: ChevronDown,
        chevronLeft: ChevronLeft,
        chevronRight: ChevronRight,
        chevronUp: ChevronUp,
        maximize: Maximize,
        close: Close,
    },
    universal: {
        avatar: Avatar,
        calendar: Calendar,
        clock: Clock,
        clockFilled: ClockFilled,
        cross: Cross,
        crossCircle: CrossCircle,
        crossSmall: CrossSmall,
        done: Done,
        download: Download,
        edit: Edit,
        event: Event,
        house: House,
        houseSbol: HouseSbol,
        login: Login,
        logout: Logout,
        minus: Minus,
        moreHorizontal: MoreHorizontal,
        moreVertical: MoreVertical,
        persone: Persone,
        plus: Plus,
        plusCircle: PlusCircle,
        search: Search,
        settings: Settings,
        spinner: Spinner,
        trash: Trash,
        trashFilled: TrashFilled,
    },
    action: {
        alarm: Alarm,
        bankCard: BankCard,
        bankCardAlt1: BankCardAlt1,
        heart: Heart,
        heartStroke: HeartStroke,
        language: Language,
        lock: Lock,
        power: Power,
        refresh: Refresh,
        reset: Reset,
        syncProblem: SyncProblem,
        timer: Timer,
        timerFill: TimerFill,
    },
    alert: {
        bell: Bell,
        bellActive: BellActive,
        help: Help,
        info: Info,
        info1: Info1,
        infoFilled: InfoFilled,
        warning: Warning,
    },
    av: {
        camReverse: CamReverse,
        cameraVideo: CameraVideo,
        videoOff: VideoOff,
        mic: Mic,
        micNone: MicNone,
        micOff: MicOff,
        musicMic: MusicMic,
        volumeAlt1: VolumeAlt1,
        volumeAlt2: VolumeAlt2,
        volumeDown: VolumeDown,
        mute: Mute,
        volumeOff: VolumeOff,
        volumeUp: VolumeUp,
        videoClip: VideoClip,
        musicAlbum: MusicAlbum,
    },
    connection: {
        bluetooth: Bluetooth,
        bluetoothDisabled: BluetoothDisabled,
        bluetoothSearching: BluetoothSearching,
        ethernetWhite: EthernetWhite,
        inputs: Inputs,
        network: Network,
        powerWire: PowerWire,
        wifi: Wifi,
        wifiNotConnected: WifiNotConnected,
        wifiSignal0: WifiSignal0,
        wifiSignal1: WifiSignal1,
        wifiSignal2: WifiSignal2,
        wifiSignal3: WifiSignal3,
        wifiSignalLock: WifiSignalLock,
    },
    hardware: {
        deviceAlt1: DeviceAlt1,
        device: Device,
        deviceTv: DeviceTv,
        display: Display,
        gamepadAlt1: GamepadAlt1,
        gyro: Gyro,
        headphones: Headphones,
        keyboard: Keyboard,
        mobileAutorotate: MobileAutorotate,
        remotesAndAccessories: RemotesAndAccessories,
        remotesAndAccessoriesStroke: RemotesAndAccessoriesStroke,
        tv: Tv,
        tvLive: TvLive,
        tvLiveAlt1: TvLiveAlt1,
    },
    communication: {
        addToCall: AddToCall,
        call: Call,
        callCircle: CallCircle,
        callEnd: CallEnd,
        callEndCircle: CallEndCircle,
        message: Message,
    },
    files: {
        cardstack: Cardstack,
        copy: Copy,
        folder: Folder,
    },
    map: {
        location: Location,
        navigationArrow: NavigationArrow,
    },
    player: {
        next: Next,
        pause: Pause,
        play: Play,
        previous: Previous,
        repeat: Repeat,
        shuffle: Shuffle,
    },
    other: {
        accessibility: Accessibility,
        picture: Picture,
        sleep: Sleep,
        magicWand: MagicWand,
        pip1: Pip1,
        storeGamepad: StoreGamepad,
        storeRemote: StoreRemote,
        ticket: Ticket,
    },
};

type IconSections = typeof iconSectionsSet;

type DistributiveValues<T extends Record<string, any>> = T extends T ? keyof T : never;
type InnerValues<T extends Record<keyof T, object>, K extends keyof T> = DistributiveValues<T[K]>;

export type IconName = InnerValues<IconSections, keyof IconSections>;

export const iconSet = Object.values(iconSectionsSet).reduce((acc, cur) => ({ ...acc, ...cur }), {}) as Record<
    IconName,
    React.FC<IconAsset>
>;
export interface IconProps {
    icon: IconName;
    size?: IconSize;
    color?: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size, color, className }) => {
    return <IconRoot className={className} icon={iconSet[icon]} size={size} color={color} />;
};