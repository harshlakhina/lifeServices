import { Text, TouchableOpacity, View } from 'react-native';
import { useContext, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SelectDropStyles } from '../screens/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../theme/themecontext';

export const Select = (props: any) => {
  const {theme}=useContext(ThemeContext)
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
        function ToggleSelected(profession: string) {
          setIsSelected(prev => {
            let updated;
            updated = prev.includes(profession)
              ? prev.filter(selected => selected !== profession)
              : [...prev, profession];
            onChange(updated);
            return updated;
          });
        }
        return (
          <View style={SelectDropStyles.container}>
            <View style={[SelectDropStyles.wrapper, props.wrapperStyle]}>
              <TouchableOpacity
                style={[
                  { borderColor: errors?.[props.name] ? 'red' : '' },
                  props.style,
                  {backgroundColor:theme.input,borderColor:theme.background}
                ]}
                onPress={() => setIsDrop(prev => !prev)}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      color: errors?.[props.name] ? 'red' : '#66737F',
                      alignSelf: 'center',
                    }}
                  >
                    {props.title}
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
                <View style={[SelectDropStyles.dropdown,{backgroundColor:theme.background}]}>
                  {props.options.map((option: string, idx: number) => {
                    const isFirst = idx === 0;
                    const isLast = idx === props.options.length - 1;

                    return (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          SelectDropStyles.input,
                          SelectDropStyles.extraDropDownItem,
                           {borderColor:theme.secondaryText},
                          isFirst && {
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                          },
                          isLast && {
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius: 25,
                          },
                        ]}
                        onPress={() => {
                          ToggleSelected(option);
                          setIsDrop(false);
                        }}
                      >
                        <Text style={{color:theme.text}}>{option}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}

              {props.selected && isSelected.length > 0 && (
                <View style={SelectDropStyles.selectedContainer}>
                  {isSelected.map(selected => (
                    <View
                      key={selected}
                      style={{
                        backgroundColor: '#07C0E0',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 15,
                        borderRadius: 45,
                        gap: 20,
                      }}
                    >
                      <Text style={SelectDropStyles.selectedText}>
                        {selected}
                      </Text>
                      <MaterialCommunityIcons
                        name="close"
                        size={20}
                        style={{ paddingRight: 8, color: '#FFF' }}
                        onPress={() => ToggleSelected(selected)}
                      />
                    </View>
                  ))}
                </View>
              )}

              {errors?.[props.name] && (
                <View style={{ width: '80%' }}>
                  <Text style={{ color: 'red' }}>
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
