import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useContext, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectDropStyles } from '../screens/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';

export const Select = (props: any) => {
  const { theme, isDark } = useContext(ThemeContext);
  const [isDrop, setIsDrop] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string[]>([]);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field: { onChange } }) => {
        function ToggleSelected(option: string) {
          if (props.multiple) {
            setIsSelected(prev => {
              const updated = prev.includes(option)
                ? prev.filter(i => i !== option)
                : [...prev, option];

              onChange(updated);
              return updated;
            });
          } else {
            setIsSelected([option]);
            onChange(option);
            setIsDrop(false);
          }
        }
        return (
          <View style={SelectDropStyles.container}>
            <View style={[SelectDropStyles.wrapper, props.wrapperStyle]}>
              <TouchableOpacity
                style={[
                  SelectDropStyles.input,
                  SelectDropStyles.extraInputItem,
                  props.style,
                  { backgroundColor: theme.input },
                  errors?.[props.name]
                    ? Styles.errorBorder
                    : isDark
                    ? Styles.darkBorder
                    : Styles.lightBorder,
                ]}
                onPress={() => setIsDrop(prev => !prev)}
              >
                <View style={Styles.dropItemsContainer}>
                  <Text
                    style={[
                      Styles.titleMain,
                      errors?.[props.name] ? Styles.error : Styles.normal,
                    ]}
                  >
                    {isSelected.length > 0
                      ? isSelected[isSelected.length - 1]
                      : props.title}
                  </Text>

                  <View>
                    <MaterialCommunityIcons
                      name="chevron-up"
                      size={20}
                      color="#8F9CA9"
                    />

                    <MaterialCommunityIcons
                      name="chevron-down"
                      size={20}
                      color="#8F9CA9"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {isDrop && (
                <View
                  style={[
                    SelectDropStyles.dropdown,
                    { backgroundColor: theme.background },
                  ]}
                >
                  {props.options.map((option: string, idx: number) => {
                    const isFirst = idx === 0;
                    const isLast = idx === props.options.length - 1;

                    return (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          SelectDropStyles.input,
                          SelectDropStyles.extraDropDownItem,

                          isDark
                            ? Styles.darkElevation
                            : Styles.normalElevation,

                          isFirst && Styles.firstItem,
                          isLast && Styles.lastItem,
                        ]}
                        onPress={() => {
                          ToggleSelected(option);
                          setIsDrop(false);
                        }}
                      >
                        <Text style={{ color: theme.text }}>{option}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}

              {props.selected && isSelected.length > 0 && (
                <View style={SelectDropStyles.selectedContainer}>
                  {isSelected.map(selected => (
                    <View key={selected} style={Styles.selectedItemContainer}>
                      <Text style={SelectDropStyles.selectedText}>
                        {selected}
                      </Text>
                      <MaterialCommunityIcons
                        name="close"
                        size={20}
                        style={Styles.selectedItemCloseIcon}
                        onPress={() => ToggleSelected(selected)}
                      />
                    </View>
                  ))}
                </View>
              )}

              {errors?.[props.name] && (
                <View style={Styles.errorWidth}>
                  <Text style={Styles.error}>
                    {errors?.[props.name]?.message as string}
                  </Text>
                </View>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  dropItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleMain: {
    alignSelf: 'center',
  },
  normal: {
    color: '#66737F',
  },
  error: {
    color: 'red',
  },
  lightBorder: { borderColor: '#fff' },
  darkBorder: { borderColor: '#0D0D0D' },
  errorBorder: { borderColor: 'red' },
  errorWidth: { width: '90%' },
  selectedItemContainer: {
    backgroundColor: '#07C0E0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 45,
    gap: 20,
  },

  selectedItemCloseIcon: { paddingRight: 8, color: '#FFF' },
  firstItem: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  lastItem: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  darkElevation: {
    elevation: 3,
  },
  normalElevation: {
    elevation: 0,
  },
});
