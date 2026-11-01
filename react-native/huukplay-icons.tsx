/*
 * HUUKPLAY icons for React Native (iOS, Android, web).
 * (c) 2026 HUUKPLAY — licensed under CC BY 4.0
 * https://creativecommons.org/licenses/by/4.0/
 * Credit: "Icons by HUUKPLAY (https://github.com/huukplay/huukplay-icons), CC BY 4.0".
 * Drawn from plain shapes (Views): no font, no image files, any colour and size.
 * The HUUKPLAY name and logo are not part of this licence.
 */
import { StyleSheet, View } from 'react-native';

export function HeartIcon({ color, size = 20 }: { color: string; size?: number }) {
  const lobe = {
    width: size / 2,
    height: size * 0.8,
    borderTopLeftRadius: size / 4,
    borderTopRightRadius: size / 4,
    backgroundColor: color,
  };
  return (
    <View accessible={false} style={{ width: size, height: size * 0.9 }}>
      <View
        style={[
          styles.lobe,
          lobe,
          { left: 0, transform: [{ rotate: '45deg' }], transformOrigin: '100% 100%' },
        ]}
      />
      <View
        style={[
          styles.lobe,
          lobe,
          { left: size / 2, transform: [{ rotate: '-45deg' }], transformOrigin: '0% 100%' },
        ]}
      />
    </View>
  );
}

export function PlaylistAddIcon({ color, size = 22 }: { color: string; size?: number }) {
  const k = size / 22;
  const bar = (top: number, width: number) => (
    <View
      style={[styles.part, { top: top * k, left: 0, width: width * k, height: 2.5 * k, backgroundColor: color }]}
    />
  );
  return (
    <View accessible={false} style={{ width: size, height: 17 * k }}>
      {bar(0, 14)}
      {bar(6, 14)}
      {bar(12, 8)}
      <View style={[styles.part, { top: 12 * k, left: 11 * k, width: 10 * k, height: 2.5 * k, backgroundColor: color }]} />
      <View style={[styles.part, { top: 8.25 * k, left: 14.75 * k, width: 2.5 * k, height: 10 * k, backgroundColor: color }]} />
    </View>
  );
}

export function PlaylistIcon({ color, size = 22 }: { color: string; size?: number }) {
  const k = size / 22;
  const bar = (top: number, width: number) => (
    <View
      style={[styles.part, { top: top * k, left: 2 * k, width: width * k, height: 2.5 * k, backgroundColor: color }]}
    />
  );
  return (
    <View accessible={false} style={{ width: size, height: 17 * k }}>
      {bar(1, 18)}
      {bar(7.25, 18)}
      {bar(13.5, 12)}
    </View>
  );
}

export function HistoryIcon({ color, size = 20 }: { color: string; size?: number }) {
  const k = size / 20;
  return (
    <View
      accessible={false}
      style={{ width: size, height: size, borderRadius: size / 2, borderWidth: 2.2 * k, borderColor: color }}>
      <View style={[styles.part, { left: 7.8 * k, top: 3 * k, width: 2.2 * k, height: 6 * k, backgroundColor: color }]} />
      <View style={[styles.part, { left: 7.8 * k, top: 7.8 * k, width: 5 * k, height: 2.2 * k, backgroundColor: color }]} />
    </View>
  );
}

/** New songs: a small four-point sparkle (two crossed bars and a smaller turned pair). */
export function NewSongsIcon({ color, size = 20 }: { color: string; size?: number }) {
  const k = size / 20;
  const bar = (w: number, h: number, rotate: string) => (
    <View
      style={[
        styles.part,
        {
          left: (size - w * k) / 2,
          top: (size - h * k) / 2,
          width: w * k,
          height: h * k,
          backgroundColor: color,
          borderRadius: 1.5 * k,
          transform: [{ rotate }],
        },
      ]}
    />
  );
  return (
    <View accessible={false} style={{ width: size, height: size }}>
      {bar(3, 18, '0deg')}
      {bar(18, 3, '0deg')}
      {bar(2.2, 10, '45deg')}
      {bar(2.2, 10, '-45deg')}
    </View>
  );
}

/** Search: a magnifying glass (a ring and a handle). */
export function SearchIcon({ color, size = 20 }: { color: string; size?: number }) {
  const k = size / 20;
  return (
    <View accessible={false} style={{ width: size, height: size }}>
      <View
        style={[styles.part, { left: 1 * k, top: 1 * k, width: 13 * k, height: 13 * k, borderRadius: 6.5 * k, borderWidth: 2.4 * k, borderColor: color }]}
      />
      <View
        style={[styles.part, { left: 12.2 * k, top: 11 * k, width: 2.6 * k, height: 8.5 * k, backgroundColor: color, transform: [{ rotate: '-45deg' }] }]}
      />
    </View>
  );
}



/** Play after this: a play triangle with a small plus. */
export function PlayAfterIcon({ color, size = 22 }: { color: string; size?: number }) {
  const k = size / 22;
  return (
    <View accessible={false} style={{ width: size, height: 18 * k }}>
      <View
        style={[
          styles.part,
          {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            borderTopWidth: 8 * k,
            borderBottomWidth: 8 * k,
            borderLeftWidth: 12 * k,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: color,
          },
        ]}
      />
      <View style={[styles.part, { top: 12 * k, left: 12 * k, width: 10 * k, height: 2.5 * k, backgroundColor: color }]} />
      <View style={[styles.part, { top: 8.25 * k, left: 15.75 * k, width: 2.5 * k, height: 10 * k, backgroundColor: color }]} />
    </View>
  );
}

/** From the start: a bar and two triangles pointing back (|◀◀). */
export function FromStartIcon({ color, size = 20 }: { color: string; size?: number }) {
  const k = size / 20;
  const triangle = {
    width: 0,
    height: 0,
    borderTopWidth: 6 * k,
    borderBottomWidth: 6 * k,
    borderRightWidth: 8 * k,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: color,
  };
  return (
    <View accessible={false} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: 2.5 * k, height: 12 * k, borderRadius: 1, marginRight: 1 * k, backgroundColor: color }} />
      <View style={triangle} />
      <View style={triangle} />
    </View>
  );
}

/** Move to top (⤒) or to bottom (⤓): a bar, an arrow head and a short stem. */
export function MoveIcon({ color, direction, size = 14 }: { color: string; direction: 'top' | 'bottom'; size?: number }) {
  const k = size / 14;
  const bar = <View style={{ width: 14 * k, height: 2 * k, borderRadius: 1, backgroundColor: color }} />;
  const head = (
    <View
      style={[
        {
          width: 0,
          height: 0,
          marginTop: 1 * k,
          borderLeftWidth: 6 * k,
          borderRightWidth: 6 * k,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
        },
        direction === 'top'
          ? { borderBottomWidth: 8 * k, borderBottomColor: color }
          : { borderTopWidth: 8 * k, borderTopColor: color },
      ]}
    />
  );
  const stem = <View style={{ width: 2 * k, height: 6 * k, backgroundColor: color }} />;
  return (
    <View accessible={false} style={{ alignItems: 'center' }}>
      {direction === 'top' ? (
        <>
          {bar}
          {head}
          {stem}
        </>
      ) : (
        <>
          {stem}
          {head}
          {bar}
        </>
      )}
    </View>
  );
}

/** Drag handle: three short lines (≡). */
export function DragHandleIcon({ color, size = 18 }: { color: string; size?: number }) {
  const k = size / 18;
  return (
    <View accessible={false} style={{ gap: 4 * k }}>
      {[0, 1, 2].map((line) => (
        <View key={line} style={{ width: 18 * k, height: 2 * k, borderRadius: 1, backgroundColor: color }} />
      ))}
    </View>
  );
}

/** Follow an artist: a person (head and shoulders). */
export function FollowIcon({ color, size = 20 }: { color: string; size?: number }) {
  const k = size / 20;
  return (
    <View accessible={false} style={{ width: size, height: size }}>
      <View style={[styles.part, { left: 6 * k, top: 1 * k, width: 8 * k, height: 8 * k, borderRadius: 4 * k, backgroundColor: color }]} />
      <View
        style={[styles.part, { left: 2 * k, top: 11 * k, width: 16 * k, height: 8 * k, borderTopLeftRadius: 8 * k, borderTopRightRadius: 8 * k, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, backgroundColor: color }]}
      />
    </View>
  );
}

/** The song's page: an "i" in a circle. */
export function SongInfoIcon({ color, size = 26 }: { color: string; size?: number }) {
  const k = size / 26;
  return (
    <View accessible={false} style={{ width: size, height: size }}>
      <View
        style={[styles.part, { left: 1 * k, top: 1 * k, width: 24 * k, height: 24 * k, borderRadius: 12 * k, borderWidth: 2.4 * k, borderColor: color }]}
      />
      <View style={[styles.part, { left: 11.4 * k, top: 6.5 * k, width: 3.2 * k, height: 3.2 * k, borderRadius: 1.6 * k, backgroundColor: color }]} />
      <View style={[styles.part, { left: 11.6 * k, top: 11.5 * k, width: 2.8 * k, height: 8.5 * k, backgroundColor: color }]} />
    </View>
  );
}

/** Share: an arrow going up out of an open box (our own shapes). */
export function ShareIcon({ color, size = 24 }: { color: string; size?: number }) {
  const k = size / 24;
  const line = 2.4 * k;
  return (
    <View accessible={false} style={{ width: size, height: size }}>
      {/* the arrow */}
      <View style={[styles.part, { left: 12 * k - line / 2, top: 2 * k, width: line, height: 13 * k, backgroundColor: color }]} />
      <View
        style={[
          styles.part,
          { left: 7.4 * k, top: 4.6 * k, width: 6.5 * k, height: line, backgroundColor: color, transform: [{ rotate: '-45deg' }] },
        ]}
      />
      <View
        style={[
          styles.part,
          { left: 10.1 * k, top: 4.6 * k, width: 6.5 * k, height: line, backgroundColor: color, transform: [{ rotate: '45deg' }] },
        ]}
      />
      {/* the open box */}
      <View style={[styles.part, { left: 3 * k, top: 10 * k, width: line, height: 12 * k, backgroundColor: color }]} />
      <View style={[styles.part, { left: 21 * k - line, top: 10 * k, width: line, height: 12 * k, backgroundColor: color }]} />
      <View style={[styles.part, { left: 3 * k, top: 22 * k - line, width: 18 * k, height: line, backgroundColor: color }]} />
      <View style={[styles.part, { left: 3 * k, top: 10 * k, width: 4.5 * k, height: line, backgroundColor: color }]} />
      <View style={[styles.part, { left: 16.5 * k, top: 10 * k, width: 4.5 * k, height: line, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  lobe: { position: 'absolute', top: 0 },
  part: { position: 'absolute', borderRadius: 1 },
});
